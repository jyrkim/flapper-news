class PostsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]

  def index
    respond_with Post.all
  end

  def create
    #logger.info "Post.create user #{current_user.id}" 
    respond_with Post.create(post_params.merge(user_id: current_user.id))
  end

  def show
    #render Post.find(params[:id])
    #the above results in internal server error 500
    render json: Post.find(params[:id]).to_json 
    # http://apidock.com/rails/ActionController/MimeResponds/ClassMethods/respond_to
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)

    respond_with post
  end


  private

  def post_params

    params.require(:post).permit(:link, :title)

  end
end
