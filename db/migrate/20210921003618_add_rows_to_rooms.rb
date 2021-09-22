class AddRowsToRooms < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :name, :string, null: false
    add_column :rooms, :owner_id, :integer, null: false, index: true
  end
end
