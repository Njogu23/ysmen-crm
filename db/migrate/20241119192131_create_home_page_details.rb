class CreateHomePageDetails < ActiveRecord::Migration[7.1]
  def change
    create_table :home_page_details do |t|
      t.text :motto
      t.text :history
      t.text :vision
      t.string :mission
      t.string :text
      t.references :club, null: false, foreign_key: true
      t.references :district, null: false, foreign_key: true

      t.timestamps
    end
  end
end
