class DistrictEventsController < ApplicationController
  before_action :set_district_event, only: %i[ show update destroy ]

  # GET /district_events
  def index
    @district_events = DistrictEvent.all

    render json: @district_events
  end

  # GET /district_events/1
  def show
    render json: @district_event
  end

  # POST /district_events
  def create
    @district_event = DistrictEvent.new(district_event_params)

    if @district_event.save
      render json: @district_event, status: :created, location: @district_event
    else
      render json: @district_event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /district_events/1
  def update
    if @district_event.update(district_event_params)
      render json: @district_event
    else
      render json: @district_event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /district_events/1
  def destroy
    @district_event.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_district_event
      @district_event = DistrictEvent.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def district_event_params
      params.require(:district_event).permit(:title, :description, :image_url, :date)
    end
end
