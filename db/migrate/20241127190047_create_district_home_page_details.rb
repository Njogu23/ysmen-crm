class CreateDistrictHomePageDetails < ActiveRecord::Migration[7.1]
  def change
    create_table :district_home_page_details do |t|
      t.text :motto
      t.text :history
      t.text :vision
      t.text :mission

      t.timestamps
    end
  end
end
