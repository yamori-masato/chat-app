import consumer from "./consumer"

document.addEventListener("turbolinks:load", () => {
  const data = document.getElementById("data")
  if (data === null) {
    return
  }
  const channel = "RoomChannel"
  const room_id = data.getAttribute("data-room-id")
  const user_id = data.getAttribute("data-user-id")
  if (!is_subscribed(channel, room_id, user_id)) {
    consumer.subscriptions.create(
      { channel: channel, room_id: room_id, user_id: user_id },
      {
        connected() {
        },
  
        disconnected() {
        },
  
        received(data) {
          const container = document.getElementById("container")
          container.insertAdjacentHTML('beforeend', data['message'])
        }
      }
    )
  }
})

// helper
const is_subscribed = (channel, room_id, user_id) => {
  const identifier = `{"channel":"${channel}","room_id":"${room_id}","user_id":"${user_id}"}`
  const subscription = consumer.subscriptions.findAll(identifier)
  return !!subscription.length
}
