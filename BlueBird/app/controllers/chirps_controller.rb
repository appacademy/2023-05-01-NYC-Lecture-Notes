class ChirpsController < ApplicationController
  before_action :require_logged_in, only: [:new, :create]

  def index
    @chirps = Chirp.all.includes(:author).order(created_at: :DESC)
    
    # render json: chirps
    render :index
  end

  def show
    @chirp = Chirp.find(params[:id])
    render :show
  end

  def new
    render :new
  end

  def create
    # chirp = Chirp.new(params.require(:chirp).permit(:body, :author_id))
    # chirp = Chirp.new(chirp_params)
    # chirp.author_id = current_user.id
    chirp = current_user.chirps.new(chirp_params)

    if chirp.save!
      # debugger
      redirect_to chirp_url(chirp.id)
    else
      # render json: chirp.errors.full_messages, status: 422 # :unprocessible_entity
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @chirp = Chirp.find(params[:id])
    render :edit
  end

  def update
    chirp = Chirp.find(params[:id])

    if chirp.update(chirp_params)
      redirect_to chirp_url(chirp)
    else
      render json: chirp.errors.full_messages, status: :unprocessible_entity
    end
  end

  def destroy
    chirp = Chirp.find(params[:id])
    chirp.destroy
    redirect_to chirps_url
  end


  private
  def chirp_params
    params.require(:chirp).permit(:body, :author_id)
  end

end
