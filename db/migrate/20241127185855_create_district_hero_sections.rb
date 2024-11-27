class CreateDistrictHeroSections < ActiveRecord::Migration[7.1]
  def change
    create_table :district_hero_sections do |t|
      t.string :title
      t.string :subtitle
      t.text :subtext
      t.string :image_url

      t.timestamps
    end
  end
end
