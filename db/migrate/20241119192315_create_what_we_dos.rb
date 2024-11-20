class CreateWhatWeDos < ActiveRecord::Migration[7.1]
  def change
    create_table :what_we_dos do |t|
      t.string :title
      t.string :image_url
      t.text :description
      t.references :district, null: false, foreign_key: true

      t.timestamps
    end
  end
end
