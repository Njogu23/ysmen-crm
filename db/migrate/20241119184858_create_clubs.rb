class CreateClubs < ActiveRecord::Migration[7.1]
  def change
    create_table :clubs do |t|
      t.string :name
      t.string :location
      t.string :email
      t.string :phone_number
      t.string :date_of_charter
      t.references :district, null: false, foreign_key: true

      t.timestamps
    end
  end
end
