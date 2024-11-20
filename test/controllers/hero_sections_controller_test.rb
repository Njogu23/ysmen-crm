require "test_helper"

class HeroSectionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hero_section = hero_sections(:one)
  end

  test "should get index" do
    get hero_sections_url, as: :json
    assert_response :success
  end

  test "should create hero_section" do
    assert_difference("HeroSection.count") do
      post hero_sections_url, params: { hero_section: { club_id: @hero_section.club_id, district_id: @hero_section.district_id, image: @hero_section.image, subtext: @hero_section.subtext, subtitle: @hero_section.subtitle, title: @hero_section.title } }, as: :json
    end

    assert_response :created
  end

  test "should show hero_section" do
    get hero_section_url(@hero_section), as: :json
    assert_response :success
  end

  test "should update hero_section" do
    patch hero_section_url(@hero_section), params: { hero_section: { club_id: @hero_section.club_id, district_id: @hero_section.district_id, image: @hero_section.image, subtext: @hero_section.subtext, subtitle: @hero_section.subtitle, title: @hero_section.title } }, as: :json
    assert_response :success
  end

  test "should destroy hero_section" do
    assert_difference("HeroSection.count", -1) do
      delete hero_section_url(@hero_section), as: :json
    end

    assert_response :no_content
  end
end
