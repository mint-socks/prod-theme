require 'yaml'

desc "Check environment"
task "env" do
  file = YAML.load_file('config.yml')
  if file[:theme_id] == 5301141
    puts "You are in Development"
  end
  if file[:theme_id] == nil
    puts "You are in Production"
  end
end

desc "Switch to Production"
task "prod" do
  file = YAML.load_file('config.yml')
  file[:theme_id] = nil
  File.open('config.yml','w') {|f| f.write file.to_yaml}
  puts "Successfully switched to Production"
end

desc "Switch to Development"
task "dev" do
  file = YAML.load_file('config.yml')
  file[:theme_id] = 5301141
  File.open('config.yml','w') {|f| f.write file.to_yaml}
  puts "Successfully switched to Development"
end