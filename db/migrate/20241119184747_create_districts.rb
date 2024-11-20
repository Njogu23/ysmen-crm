class CreateDistricts < ActiveRecord::Migration[7.1]
  def change
    create_table :districts do |t|
      t.string :name
      t.string :email
      t.string :phone_number

      t.timestamps
    end
  end
end
