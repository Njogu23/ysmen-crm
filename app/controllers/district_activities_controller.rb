class DistrictActivitiesController < ApplicationController
  before_action :set_district_activity, only: %i[ show update destroy ]

  # GET /district_activities
  def index
    @district_activities = DistrictActivity.all

    render json: @district_activities
  end

  # GET /district_activities/1
  def show
    render json: @district_activity
  end

  # POST /district_activities
  def create
    @district_activity = DistrictActivity.new(district_activity_params)

    if @district_activity.save
      render json: @district_activity, status: :created, location: @district_activity
    else
      render json: @district_activity.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /district_activities/1
  def update
    if @district_activity.update(district_activity_params)
      render json: @district_activity
    else
      render json: @district_activity.errors, status: :unprocessable_entity
    end
  end

  # DELETE /district_activities/1
  def destroy
    @district_activity.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_district_activity
      @district_activity = DistrictActivity.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def district_activity_params
      params.require(:district_activity).permit(:title, :description, :images, :date)
    end
end
