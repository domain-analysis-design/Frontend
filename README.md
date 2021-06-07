# Domain Analysis and Design Project

## Project Link

https://github.com/domain-analysis-design

## How to Run

### Frontend

```

# git clone https://github.com/zinozino1/domain-analysis.git

# go to cloned directory
$ cd /domain-analysis

# install dependencies
$ npm install
$ yarn install

# running localhost 3000 port
$ npm start

```

### Backend

```

1.
# install gradle (linux/mac)
$ gradle runJar


# install gradle (windows)
$ gradlew.bat runJar


2.
## plugins and dependencies
# build.gradle file

plugins {
    id 'org.springframework.boot' version '2.3.2.RELEASE'
    id 'io.spring.dependency-management' version '1.0.9.RELEASE'
    id 'java'
}

group = 'kr.kyuhyuk'
version = '0.0.1-SNAPSHOT'
sourceCompatibility = '8'

configurations {
    compileOnly {
        extendsFrom annotationProcessor
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
    implementation 'org.springframework.boot:spring-boot-starter-web'
    compileOnly 'org.projectlombok:lombok'
    runtimeOnly 'mysql:mysql-connector-java'
    annotationProcessor 'org.projectlombok:lombok'
    testImplementation('org.springframework.boot:spring-boot-starter-test') {
        exclude group: 'org.junit.vintage', module: 'junit-vintage-engine'
    }
}

test {
    useJUnitPlatform()
}

3.
# gradle build
$ grade build -x test

4.
# server info

htttp://localhost:8080/
user : root
password : root


```
