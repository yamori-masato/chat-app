class RoomsController < ApplicationController
  before_action :set_user, only: [:index, :show]

  def index
    @rooms = @user.rooms.all
  end

  def show
    @room = @user.rooms.find(params[:id])
    @messages = @room.messages.all
    @message = @room.messages.build
  end

  private
    def set_user
      @user = User.find(params[:user_id])
    end
end
