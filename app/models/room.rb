# == Schema Information
#
# Table name: rooms
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          not null
#
class Room < ApplicationRecord
  validates :name, presence: true

  has_many :messages
  has_many :room_users

  belongs_to :owner, 
    foreign_key: :owner_id,
    class_name: :User

  has_many :users, 
    through: :room_users,
    source: :user
  
end
