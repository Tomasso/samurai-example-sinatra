require 'rubygems'; require 'bundler'; Bundler.require; require 'open-uri'

Samurai.options = YAML.load(open('https://raw.github.com/FeeFighters/samurai-sinatra-demo/master/samurai.yml').read).symbolize_keys
layout { open('https://raw.github.com/FeeFighters/samurai-sinatra-demo/master/views/layout.haml').read }

get '/' do; haml ''; end

post '/create-transaction' do
  @payment_method = Samurai::PaymentMethod.find params[:payment_method_token]
  @transaction = Samurai::Processor.the_processor.purchase params[:payment_method_token],
                                                           111.11,
                                                           :descriptor=>'Katana Sword'
  @errors = erb Samurai::Rails::Views.errors_html, :layout=>false
  erb Samurai::Rails::Views.transaction_html
end