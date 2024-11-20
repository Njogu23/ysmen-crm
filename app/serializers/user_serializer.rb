class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :email, :first_name, :last_name, :nickname, :email, :phone_number, :date_of_birth, :role, :designation, :occupation, :image_url, :date_joined
end
