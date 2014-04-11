require 'rake/packagetask'

Rake::PackageTask.new("base_crud_app", "1.0.0") do |p|
  p.need_zip = true
  p.package_files = FileList["*", "**/*"]
  p.package_files.exclude(".git", "pkg", "pkg/**/*", "spec", "spec/**/*", "Rakefile", ".gitignore")
end
