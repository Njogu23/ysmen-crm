class DistrictHomePageDetailsController < ApplicationController
  before_action :set_district_home_page_detail, only: %i[ show update destroy ]

  # GET /district_home_page_details
  def index
    @district_home_page_details = DistrictHomePageDetail.all

    render json: @district_home_page_details
  end

  # GET /district_home_page_details/1
  def show
    render json: @district_home_page_detail
  end

  # POST /district_home_page_details
  def create
    @district_home_page_detail = DistrictHomePageDetail.new(district_home_page_detail_params)

    if @district_home_page_detail.save
      render json: @district_home_page_detail, status: :created, location: @district_home_page_detail
    else
      render json: @district_home_page_detail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /district_home_page_details/1
  def update
    if @district_home_page_detail.update(district_home_page_detail_params)
      render json: @district_home_page_detail
    else
      render json: @district_home_page_detail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /district_home_page_details/1
  def destroy
    @district_home_page_detail.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_district_home_page_detail
      @district_home_page_detail = DistrictHomePageDetail.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def district_home_page_detail_params
      params.require(:district_home_page_detail).permit(:motto, :history, :vision, :mission)
    end
end
