FROM stoplight/prism:4
COPY reg-bb-api.json /usr/src/prism/
EXPOSE 4010
CMD ["mock","-h","'0.0.0.0'","/usr/src/prism/reg-bb-api.json"]
