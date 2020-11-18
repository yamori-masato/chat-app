import consumer from "./consumer"

document.addEventListener("turbolinks:load", () => {
  const data = document.getElementById("data")
  if (data === null) {
    return
  }
  const room_id = data.getAttribute("data-room-id")
  const user_id = data.getAttribute("data-user-id")

  consumer.subscriptions.create(
    { channel: "RoomChannel", room_id: room_id, user_id: user_id },
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
})