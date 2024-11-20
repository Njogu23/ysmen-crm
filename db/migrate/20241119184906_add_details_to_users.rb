class AddDetailsToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :nickname, :string
    add_column :users, :phone_number, :string
    add_column :users, :date_of_birth, :string
    add_column :users, :date_joined, :string
    add_column :users, :role, :integer
    add_column :users, :designation, :string
    add_column :users, :image_url, :string
    add_column :users, :occupation, :string
    add_reference :users, :club, null: false, foreign_key: true
  end
end
