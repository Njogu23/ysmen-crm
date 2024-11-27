class CreateDistrictActivities < ActiveRecord::Migration[7.1]
  def change
    create_table :district_activities do |t|
      t.string :title
      t.text :description
      t.json :images
      t.date :date

      t.timestamps
    end
  end
end
