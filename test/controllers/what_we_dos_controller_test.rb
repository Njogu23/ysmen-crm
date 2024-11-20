require "test_helper"

class WhatWeDosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @what_we_do = what_we_dos(:one)
  end

  test "should get index" do
    get what_we_dos_url, as: :json
    assert_response :success
  end

  test "should create what_we_do" do
    assert_difference("WhatWeDo.count") do
      post what_we_dos_url, params: { what_we_do: { description: @what_we_do.description, district_id: @what_we_do.district_id, image_url: @what_we_do.image_url, title: @what_we_do.title } }, as: :json
    end

    assert_response :created
  end

  test "should show what_we_do" do
    get what_we_do_url(@what_we_do), as: :json
    assert_response :success
  end

  test "should update what_we_do" do
    patch what_we_do_url(@what_we_do), params: { what_we_do: { description: @what_we_do.description, district_id: @what_we_do.district_id, image_url: @what_we_do.image_url, title: @what_we_do.title } }, as: :json
    assert_response :success
  end

  test "should destroy what_we_do" do
    assert_difference("WhatWeDo.count", -1) do
      delete what_we_do_url(@what_we_do), as: :json
    end

    assert_response :no_content
  end
end
