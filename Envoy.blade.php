@servers(['web' => ['coltrida@80.211.73.235']])

@task('compInstall', ['on' => 'web'])
composer install
@endtask
