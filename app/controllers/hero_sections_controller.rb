class HeroSectionsController < ApplicationController
  before_action :set_hero_section, only: %i[ show update destroy ]

  # GET /hero_sections
  def index
    @hero_sections = HeroSection.all

    render json: @hero_sections
  end

  # GET /hero_sections/1
  def show
    render json: @hero_section
  end

  # POST /hero_sections
  def create
    @hero_section = HeroSection.new(hero_section_params)

    if @hero_section.save
      render json: @hero_section, status: :created, location: @hero_section
    else
      render json: @hero_section.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /hero_sections/1
  def update
    if @hero_section.update(hero_section_params)
      render json: @hero_section
    else
      render json: @hero_section.errors, status: :unprocessable_entity
    end
  end

  # DELETE /hero_sections/1
  def destroy
    @hero_section.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hero_section
      @hero_section = HeroSection.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def hero_section_params
      params.require(:hero_section).permit(:title, :subtitle, :subtext, :image, :club_id, :district_id)
    end
end
