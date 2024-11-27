require "test_helper"

class DistrictHeroSectionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @district_hero_section = district_hero_sections(:one)
  end

  test "should get index" do
    get district_hero_sections_url, as: :json
    assert_response :success
  end

  test "should create district_hero_section" do
    assert_difference("DistrictHeroSection.count") do
      post district_hero_sections_url, params: { district_hero_section: { image_url: @district_hero_section.image_url, subtext: @district_hero_section.subtext, subtitle: @district_hero_section.subtitle, title: @district_hero_section.title } }, as: :json
    end

    assert_response :created
  end

  test "should show district_hero_section" do
    get district_hero_section_url(@district_hero_section), as: :json
    assert_response :success
  end

  test "should update district_hero_section" do
    patch district_hero_section_url(@district_hero_section), params: { district_hero_section: { image_url: @district_hero_section.image_url, subtext: @district_hero_section.subtext, subtitle: @district_hero_section.subtitle, title: @district_hero_section.title } }, as: :json
    assert_response :success
  end

  test "should destroy district_hero_section" do
    assert_difference("DistrictHeroSection.count", -1) do
      delete district_hero_section_url(@district_hero_section), as: :json
    end

    assert_response :no_content
  end
end
