class Api::V1::MessagesController < ApplicationController
  def index
    messages = Message.all
    if messages
      render json: { status: 'SUCCESS', message: 'Fetched all the messages successfully', data: messages }, status: :ok
    else
      render json: messages.errors, status: :bad_request
    end
  end
end
