require 'yaml'

case ARGV[0]
  when 'prod'
    file = YAML.load_file('config.yml')
    file[:theme_id] = nil
    File.open('config.yml','w') {|f| f.write file.to_yaml}
    puts "Successfully switched to Production"
  when 'dev'
    file = YAML.load_file('config.yml')
    file[:theme_id] = 5301141
    File.open('config.yml','w') {|f| f.write file.to_yaml}
    puts "Successfully switched to Development"
  when nil
    file = YAML.load_file('config.yml')
    p file
    if file[:theme_id] == 5301141
      puts "You are in Development"
    end
    if file[:theme_id] == nil
      puts "You are in Production"
    end
  end
