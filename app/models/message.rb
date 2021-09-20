# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  room_id    :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_messages_on_room_id  (room_id)
#  index_messages_on_user_id  (user_id)
#
class Message < ApplicationRecord
  validate :content, presence: true

  belongs_to :user
  belongs_to :room

end
