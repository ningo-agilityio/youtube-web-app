import React, { useRef } from 'react';
import styled from 'styled-components';
import { FormProps } from 'buildTypes';
import { BTN } from 'constants/index';
import { colors } from 'theme/color';
import { useDispatch } from 'react-redux';
import { toggleForm } from 'actions';
import logo from 'assets/sub-logo.png';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

// eslint-disable-next-line import/extensions
import { MediaUploader } from 'youtube/mediaUpload.js';

const FormStyled = styled.form`
  background: ${colors.WHITE};
  min-width: 25rem;
  min-height: 27rem;
  border: 0.05rem solid ${colors.GRAY};
  border-radius: 0.5rem;
  padding: 2.5rem;
  text-align: center;
  box-sizing: border-box;
`;

const TitleForm = styled.h3`
  margin: 0;
  color: ${colors.BLUE};
`;

const Logo = styled.img`
  width: 50%;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const Form = (props: FormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const pathRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    // if (
    //   titleRef.current?.value.trim() === ACCOUNT.email &&
    //   descRef.current?.value.trim() === ACCOUNT.password
    // ) {
    // }

    let file:any  = []

    if (pathRef && pathRef.current) {
      file = pathRef.current.files
    }

    const CLIENT_ID = '573746775859-s6pug3gjv9tch0vae2gvjjdlkr4mdkmf.apps.googleusercontent.com'
    const API_KEY = 'AIzaSyARbna02GAVO_QTAW_8GQ_yYDcDbqM2hIw'
    const SCOPE = 'https://www.googleapis.com/auth/youtube'
    gapi.load('client:auth2', () => {
      gapi.auth.authorize({
        client_id: CLIENT_ID,
        scope: [SCOPE],
        immediate: false
      }, (response) => {
        const ACCESS_TOKEN = response.access_token
        const metadata = {
          snippet: {
            title: 'Test video',
            description: 'Test desc',
            tags: '',
            categoryId: '',
          },
          status: {
            privacyStatus: '',
          },
        };

        const uploader = new MediaUploader({
          baseUrl: `https://www.googleapis.com/upload/youtube/v3/videos`,
          file: file[0],
          token: ACCESS_TOKEN,
          metadata: metadata,
          params: {
            part: Object.keys(metadata).join(','),
          },
          onError: () => {},
          onProgress: () => {},
          onComplete: (response: any) => {
            console.log('uploaded', response);
          }
        });

        uploader.upload();
      });
    });
  };
  const handleOnClickCancel = () => {
    dispatch(toggleForm());
  };



  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <Logo src={logo} alt="Sub Logo" />
      <TitleForm>Upload video</TitleForm>
      <input type="file" accept="video/*" ref={pathRef} />
      <Input
        type="text"
        inputRef={titleRef}
        placeholder="Title..."
        defaultValue=""
      />
      <Textarea
        textareaRef={descRef}
        placeholder="Description..."
        defaultValue=""
      />
      <Wrapper>
        <Button 
          name={BTN.SECONDARY} 
          value="submit" 
          type="submit" 
          onClick={handleOnSubmit} 
        />
        <Button
          name={BTN.SECONDARY}
          value="cancel"
          type="button"
          onClick={handleOnClickCancel}
        />
      </Wrapper>
    </FormStyled>
  );
};
