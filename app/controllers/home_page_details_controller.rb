class HomePageDetailsController < ApplicationController
  before_action :set_home_page_detail, only: %i[ show update destroy ]

  # GET /home_page_details
  def index
    @home_page_details = HomePageDetail.all

    render json: @home_page_details
  end

  # GET /home_page_details/1
  def show
    render json: @home_page_detail
  end

  # POST /home_page_details
  def create
    @home_page_detail = HomePageDetail.new(home_page_detail_params)

    if @home_page_detail.save
      render json: @home_page_detail, status: :created, location: @home_page_detail
    else
      render json: @home_page_detail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /home_page_details/1
  def update
    if @home_page_detail.update(home_page_detail_params)
      render json: @home_page_detail
    else
      render json: @home_page_detail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /home_page_details/1
  def destroy
    @home_page_detail.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_home_page_detail
      @home_page_detail = HomePageDetail.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def home_page_detail_params
      params.require(:home_page_detail).permit(:motto, :history, :vision, :mission, :text, :club_id, :district_id)
    end
end
