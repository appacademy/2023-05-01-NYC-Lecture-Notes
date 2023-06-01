# == Schema Information
#
# Table name: chirps
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chirp < ApplicationRecord
  validates :body, presence: true
  # validates :author_id, presence: true
  # validates :body, length: { maximum: 140 }
  validate :body_too_long

  def body_too_long
    if body && body.length > 140
      self.errors.add(:body, "Too long")  
    end
  end

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  
  has_many :likes,
    dependent: :destroy

  has_many :likers,
    through: :likes,
    source: :liker

end
