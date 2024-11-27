class RemoveDistrictRelations < ActiveRecord::Migration[7.1]
  def change
    remove_foreign_key :activities, :districts
    remove_column :activities, :district_id, :bigint

    remove_foreign_key :events, :districts
    remove_column :events, :district_id, :bigint

    remove_foreign_key :hero_sections, :districts
    remove_column :hero_sections, :district_id, :bigint

    remove_foreign_key :home_page_details, :districts
    remove_column :home_page_details, :district_id, :bigint

    remove_foreign_key :publications, :districts
    remove_column :publications, :district_id, :bigint

  end
end
