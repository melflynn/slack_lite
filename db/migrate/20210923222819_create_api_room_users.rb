class CreateApiRoomUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :api_room_users do |t|
      t.integer :room_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.timestamps
    end
  end
end
