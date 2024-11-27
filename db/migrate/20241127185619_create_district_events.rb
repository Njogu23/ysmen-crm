class CreateDistrictEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :district_events do |t|
      t.string :title
      t.text :description
      t.string :image_url
      t.date :date

      t.timestamps
    end
  end
end
