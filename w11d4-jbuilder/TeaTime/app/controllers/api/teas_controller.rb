class Api::TeasController < ApplicationController

    def index
        @teas = Tea.all 
        # debugger
        # render json: @teas
        render 'api/teas/index'
    end

    def show
        @tea = Tea.find_by(id: params[:id])

        render :show
    end

    def create 
        @tea ||= Tea.new(tea_params)

        if @tea.save
            # render json: @tea
            render :show
        else 
            render json: @tea.errors.full_messages, status: 422
        end
    end

    def tea_params
        params.require(:tea).permit(:flavor, :price, :description)
    end
end
