class CreateDistrictPublications < ActiveRecord::Migration[7.1]
  def change
    create_table :district_publications do |t|
      t.string :title
      t.text :description
      t.string :link

      t.timestamps
    end
  end
end
