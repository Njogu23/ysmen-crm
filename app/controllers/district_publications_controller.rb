class DistrictPublicationsController < ApplicationController
  before_action :set_district_publication, only: %i[ show update destroy ]

  # GET /district_publications
  def index
    @district_publications = DistrictPublication.all

    render json: @district_publications
  end

  # GET /district_publications/1
  def show
    render json: @district_publication
  end

  # POST /district_publications
  def create
    @district_publication = DistrictPublication.new(district_publication_params)

    if @district_publication.save
      render json: @district_publication, status: :created, location: @district_publication
    else
      render json: @district_publication.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /district_publications/1
  def update
    if @district_publication.update(district_publication_params)
      render json: @district_publication
    else
      render json: @district_publication.errors, status: :unprocessable_entity
    end
  end

  # DELETE /district_publications/1
  def destroy
    @district_publication.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_district_publication
      @district_publication = DistrictPublication.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def district_publication_params
      params.require(:district_publication).permit(:title, :description, :link)
    end
end
