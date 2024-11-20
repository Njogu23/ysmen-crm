class CreateHeroSections < ActiveRecord::Migration[7.1]
  def change
    create_table :hero_sections do |t|
      t.string :title
      t.string :subtitle
      t.text :subtext
      t.string :image
      t.references :club, null: false, foreign_key: true
      t.references :district, null: false, foreign_key: true

      t.timestamps
    end
  end
end
