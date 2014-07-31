require 'yaml'

desc "Check environment"
task "env" do
  file = YAML.load_file('config.yml')
  if file[:store] == 'zoraab-dev.myshopify.com'
    puts "You are in Development"
  end
  if file[:store] == 'zoraab.myshopify.com'
    puts "You are in Production"
  end
end

desc "Switch to Production"
task "prod" do
  file = YAML.load_file('config.yml')
  env = YAML.load_file('env.yml')
  file[:api_key] = env[:production][:api_key]
  file[:password] = env[:production][:password]
  file[:store] = env[:production][:store]
  File.open('config.yml','w') {|f| f.write file.to_yaml}
  puts "Successfully switched to Production"
end

desc "Switch to Development"
task "dev" do
  file = YAML.load_file('config.yml')
  env = YAML.load_file('env.yml')
  file[:api_key] = env[:development][:api_key]
  file[:password] = env[:development][:password]
  file[:store] = env[:development][:store]
  File.open('config.yml','w') {|f| f.write file.to_yaml}
  puts "Successfully switched to Development"
end
