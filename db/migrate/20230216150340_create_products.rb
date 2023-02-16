class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products, id: :uuid do |t|
      t.string :name, null: false, default: ''
      t.string :description, null: false, default: ''
      t.string :image_url, null: false, default: ''
      t.string :price, null: false, default: ''
      

      t.timestamps
    end
  end
end
