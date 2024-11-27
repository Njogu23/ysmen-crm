class DistrictHeroSectionsController < ApplicationController
  before_action :set_district_hero_section, only: %i[ show update destroy ]

  # GET /district_hero_sections
  def index
    @district_hero_sections = DistrictHeroSection.all

    render json: @district_hero_sections
  end

  # GET /district_hero_sections/1
  def show
    render json: @district_hero_section
  end

  # POST /district_hero_sections
  def create
    @district_hero_section = DistrictHeroSection.new(district_hero_section_params)

    if @district_hero_section.save
      render json: @district_hero_section, status: :created, location: @district_hero_section
    else
      render json: @district_hero_section.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /district_hero_sections/1
  def update
    if @district_hero_section.update(district_hero_section_params)
      render json: @district_hero_section
    else
      render json: @district_hero_section.errors, status: :unprocessable_entity
    end
  end

  # DELETE /district_hero_sections/1
  def destroy
    @district_hero_section.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_district_hero_section
      @district_hero_section = DistrictHeroSection.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def district_hero_section_params
      params.require(:district_hero_section).permit(:title, :subtitle, :subtext, :image_url)
    end
end
