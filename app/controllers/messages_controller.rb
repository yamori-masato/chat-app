class MessagesController < ApplicationController
  def create
    @message = Message.create!(message_params)
    @room = Room.find_by(id: message_params[:room_id])
    RoomChannel.broadcast_to(@room, message: @message.template)
  end

  private
    def message_params
      params.require(:message).permit(:content, :room_id, :user_id)
    end
end
