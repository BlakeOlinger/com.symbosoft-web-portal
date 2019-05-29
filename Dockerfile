FROM openjdk

LABEL maintainer="finalyetifive@gmail.com"

COPY /target/webportal-0.1.0.jar .

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "webportal-0.1.0.jar"]