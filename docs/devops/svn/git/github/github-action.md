# Github Action

## 示例
### Laravel

```yaml
name: Laravel

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  laravel-tests:

    runs-on: ubuntu-latest

    steps:
    - uses: shivammathur/setup-php@15c43e89cdef867065b0213be354c2841860869e
      with:
        php-version: '8.0'
    - uses: actions/checkout@v4
    - name: Copy .env
      run: php -r "file_exists('.env') || copy('.env.example', '.env');"
    - name: Install Dependencies
      run: composer install -q --no-ansi --no-interaction --no-scripts --no-progress --prefer-dist
    - name: Generate key
      run: php artisan key:generate
    - name: Directory Permissions
      run: chmod -R 777 storage bootstrap/cache
    - name: Create Database
      run: |
        mkdir -p database
        touch database/database.sqlite
    - name: Execute tests (Unit and Feature tests) via PHPUnit/Pest
      env:
        DB_CONNECTION: sqlite
        DB_DATABASE: database/database.sqlite
      run: php artisan test

```

workflow:

``` yaml
# .github/workflows/deploy.yml
 
name: Laravel CI
 
on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened]
 
jobs:
  test:
    name: Run tests & analysis
    runs-on: ubuntu-latest
 
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
 
      - name: Setup PHP with Composer v2
        uses: shivammathur/setup-php@v2
        with:
          php-version: '8.3'
          tools: composer:v2
          coverage: xdebug
 
      - name: Install dependencies
        run: composer install -q --ignore-platform-reqs --no-progress --no-suggest --prefer-dist --optimize-autoloader
 
      - name: Run PHPStan
        run: vendor/bin/phpstan analyse -c phpstan.neon
 
      - name: Run tests with PHPUnit
        run: export XDEBUG_MODE=coverage && vendor/bin/phpunit tests --coverage-html reports/ --coverage-clover=coverage.xml
 
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }
```

