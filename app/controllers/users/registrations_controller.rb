# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  include RackSessionsFix
  respond_to :json

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation, :first_name,:last_name, :nickname, :phone_number, :date_of_birth, :role, :designation, :occupation, :image_url, :date_joined, :club_id)
  end

  def create
    build_resource(sign_up_params)

    unless resource.phone_number.present?
      render json: {
        status: { message: 'Phone Number is required.' }
      }, status: :unprocessable_entity and return
    end

    super
  end

  private

  def respond_with(current_user, _opts = {})
  if resource.persisted?
    render json: {
      status: {code: 200, message: 'Signed up successfully.'},
      data: UserSerializer.new(current_user).serializable_hash[:data][:attributes]
    }
  else
    render json: {
      status: {message: "User couldn't be created successfully. #{current_user.errors.full_messages.to_sentence}"}
    }, status: :unprocessable_entity
  end
end
  
end
  