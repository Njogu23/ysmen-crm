require "test_helper"

class HomePageDetailsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @home_page_detail = home_page_details(:one)
  end

  test "should get index" do
    get home_page_details_url, as: :json
    assert_response :success
  end

  test "should create home_page_detail" do
    assert_difference("HomePageDetail.count") do
      post home_page_details_url, params: { home_page_detail: { club_id: @home_page_detail.club_id, district_id: @home_page_detail.district_id, history: @home_page_detail.history, mission: @home_page_detail.mission, motto: @home_page_detail.motto, text: @home_page_detail.text, vision: @home_page_detail.vision } }, as: :json
    end

    assert_response :created
  end

  test "should show home_page_detail" do
    get home_page_detail_url(@home_page_detail), as: :json
    assert_response :success
  end

  test "should update home_page_detail" do
    patch home_page_detail_url(@home_page_detail), params: { home_page_detail: { club_id: @home_page_detail.club_id, district_id: @home_page_detail.district_id, history: @home_page_detail.history, mission: @home_page_detail.mission, motto: @home_page_detail.motto, text: @home_page_detail.text, vision: @home_page_detail.vision } }, as: :json
    assert_response :success
  end

  test "should destroy home_page_detail" do
    assert_difference("HomePageDetail.count", -1) do
      delete home_page_detail_url(@home_page_detail), as: :json
    end

    assert_response :no_content
  end
end
