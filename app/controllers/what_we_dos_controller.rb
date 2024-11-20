class WhatWeDosController < ApplicationController
  before_action :set_what_we_do, only: %i[ show update destroy ]

  # GET /what_we_dos
  def index
    @what_we_dos = WhatWeDo.all

    render json: @what_we_dos
  end

  # GET /what_we_dos/1
  def show
    render json: @what_we_do
  end

  # POST /what_we_dos
  def create
    @what_we_do = WhatWeDo.new(what_we_do_params)

    if @what_we_do.save
      render json: @what_we_do, status: :created, location: @what_we_do
    else
      render json: @what_we_do.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /what_we_dos/1
  def update
    if @what_we_do.update(what_we_do_params)
      render json: @what_we_do
    else
      render json: @what_we_do.errors, status: :unprocessable_entity
    end
  end

  # DELETE /what_we_dos/1
  def destroy
    @what_we_do.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_what_we_do
      @what_we_do = WhatWeDo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def what_we_do_params
      params.require(:what_we_do).permit(:title, :image_url, :description, :district_id)
    end
end
