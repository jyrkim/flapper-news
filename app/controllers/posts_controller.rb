class PostsController < ApplicationController

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(post_params)
  end

  def show
       logger.info "show action entered... " + params[:id]


    #respond_with Post.find(params[:id])

    render json: Post.find(params[:id]).to_json 
    ## http://apidock.com/rails/ActionController/MimeResponds/ClassMethods/respond_to
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)

    respond_with post
  end

  private

  def post_params
    logger.info "post_params entered..."
    params.require(:post).permit(:link, :title)
  end
end
