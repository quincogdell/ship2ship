class MessagesController < ApplicationController
  respond_to :json

  def index
    @messages = Message.all
  end


  def create
    @message = Message.create(params[:message])
    respond_with @message
  end

  def new

  end


  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end


end
