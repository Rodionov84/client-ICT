const newClaims = <path d="M81.61,4.73c0-2.61,2.58-4.73,5.77-4.73s5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73 L81.61,4.73z M77.96,80.76c1.83,0,3.32,1.49,3.32,3.32c0,1.83-1.49,3.32-3.32,3.32l-12.95-0.04l-0.04,12.93 c0,1.83-1.49,3.32-3.32,3.32c-1.83,0-3.32-1.49-3.32-3.32l0.04-12.94L45.44,87.3c-1.83,0-3.32-1.49-3.32-3.32 c0-1.83,1.49-3.32,3.32-3.32l12.94,0.04l0.04-12.93c0-1.83,1.49-3.32,3.32-3.32c1.83,0,3.32,1.49,3.32,3.32l-0.04,12.95 L77.96,80.76L77.96,80.76z M29.61,4.73c0-2.61,2.58-4.73,5.77-4.73s5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73 s-5.77-2.12-5.77-4.73V4.73L29.61,4.73z M6.4,45.32h110.08V21.47c0-0.8-0.33-1.53-0.86-2.07c-0.53-0.53-1.26-0.86-2.07-0.86H103 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h10.55c2.57,0,4.9,1.05,6.59,2.74c1.69,1.69,2.74,4.02,2.74,6.59v27.06v65.03 c0,2.57-1.05,4.9-2.74,6.59c-1.69,1.69-4.02,2.74-6.59,2.74H9.33c-2.57,0-4.9-1.05-6.59-2.74C1.05,118.45,0,116.12,0,113.55V48.53 V21.47c0-2.57,1.05-4.9,2.74-6.59c1.69-1.69,4.02-2.74,6.59-2.74H20.6c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H9.33 c-0.8,0-1.53,0.33-2.07,0.86c-0.53,0.53-0.86,1.26-0.86,2.07V45.32L6.4,45.32z M116.48,51.73H6.4v61.82c0,0.8,0.33,1.53,0.86,2.07 c0.53,0.53,1.26,0.86,2.07,0.86h104.22c0.8,0,1.53-0.33,2.07-0.86c0.53-0.53,0.86-1.26,0.86-2.07V51.73L116.48,51.73z M50.43,18.54 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h21.49c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H50.43L50.43,18.54z"/>
const thirteen = <path d="M81.6,4.73C81.6,2.12,84.18,0,87.37,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73Zm-41,98.68V69.33H33.5V61.84L42,58.22H52.33v45.19Zm35.72.37q-4.83,0-9.35-.42a82.41,82.41,0,0,1-8.39-1.21V92.74H71.75a20.08,20.08,0,0,0,3.65-.25,3.11,3.11,0,0,0,1.78-.78,2.15,2.15,0,0,0,.49-1.51V89.06a2.62,2.62,0,0,0-.55-1.75,3.17,3.17,0,0,0-1.57-1A9.54,9.54,0,0,0,73,85.92l-10.74-.49V76.38l10.2-.66A10.74,10.74,0,0,0,76,75a2,2,0,0,0,1.14-1.93v-.55A2.65,2.65,0,0,0,76,70.05a9.61,9.61,0,0,0-4.47-.72H59.2V59.91c2.62-.44,5.37-.85,8.27-1.23a54.87,54.87,0,0,1,8.81-.46A17.22,17.22,0,0,1,83,59.52a9.28,9.28,0,0,1,4.31,3.74,12.14,12.14,0,0,1,1.51,6.37v3a13.75,13.75,0,0,1-.27,2.81,8.05,8.05,0,0,1-.88,2.35,6.28,6.28,0,0,1-1.57,1.84,7.42,7.42,0,0,1-2.35,1.27,6.27,6.27,0,0,1,2.5,1.36A7.84,7.84,0,0,1,88,84.47,10.6,10.6,0,0,1,89,87.34a15.41,15.41,0,0,1,.36,3.4v1.75c0,3.66-1.15,6.46-3.47,8.39s-5.5,2.9-9.56,2.9Zm-46.73-99C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,38.76H116.46V21.47a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,1,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.08a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.54V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07V38.76Zm110.07,6.41H6.4v68.37a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.54a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V45.17Zm-66-26.63a3.2,3.2,0,0,1,0-6.4H71.91a3.2,3.2,0,1,1,0,6.4Z" />
const fourteen = <path d="M81.6,4.73C81.6,2.12,84.18,0,87.37,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM38.39,103.41V69.33H31.27V61.84l8.45-3.62H50.09v45.19Zm37.89,0V95.15H57.64L55.58,89.9l13-31.31H80.5l-11,26.66h6.76V78.62l2.23-5.8H88V85.25H91.6v8.09L88,95.15v8.26ZM29.61,4.73C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,38.76H116.46V21.47a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,1,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.08a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.54V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07V38.76Zm110.07,6.41H6.4v68.37a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.54a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V45.17Zm-66-26.63a3.2,3.2,0,0,1,0-6.4H71.91a3.2,3.2,0,1,1,0,6.4Z" />
const fifteen = <path d="M81.6,4.73C81.6,2.12,84.18,0,87.37,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM40.14,103.41V69.33H33V61.84l8.44-3.62H51.84v45.19Zm33.91.37c-2.26,0-4.74-.13-7.46-.4s-5.36-.53-7.93-.81V93.28H74.59a4,4,0,0,0,2.59-.63A2.4,2.4,0,0,0,78,91.14a11.32,11.32,0,0,0,.12-1.48V87.79a4.12,4.12,0,0,0-.58-2.36,2.48,2.48,0,0,0-2.2-.84H72.72a3.18,3.18,0,0,0-2.08.54,2.33,2.33,0,0,0-.76,1.57H58.78l1.27-28.11H88V69.08H70.06l-.3,6.82a5.28,5.28,0,0,1,2.48-1,20.09,20.09,0,0,1,2.89-.22h4.59a10.4,10.4,0,0,1,5.73,1.45,8.87,8.87,0,0,1,3.32,3.92,13.75,13.75,0,0,1,1.08,5.56v6.57a11.73,11.73,0,0,1-1.72,6.67,9.7,9.7,0,0,1-5.22,3.74,28.35,28.35,0,0,1-8.86,1.18Zm-44.44-99C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,38.76H116.46V21.47a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,1,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.08a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.54V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07V38.76Zm110.07,6.41H6.4v68.37a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.54a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V45.17Zm-66-26.63a3.2,3.2,0,0,1,0-6.4H71.91a3.2,3.2,0,1,1,0,6.4Z" />;
const sixteen = <path d="M81.6,4.73C81.6,2.12,84.18,0,87.37,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM40,103.41V69.33H32.87V61.84l8.44-3.62H51.69v45.19Zm32.28.37a17.53,17.53,0,0,1-6.22-1,9.39,9.39,0,0,1-4.4-3.41A17.33,17.33,0,0,1,59,92.71,54.87,54.87,0,0,1,58.15,82a47.47,47.47,0,0,1,1.18-11.56,17.81,17.81,0,0,1,3.46-7.3,12.49,12.49,0,0,1,5.56-3.8,22.91,22.91,0,0,1,7.42-1.12q3.2,0,6.18.28a31.2,31.2,0,0,1,5.4.93v9.29H77.15c-2.73,0-4.63.69-5.7,2a9.29,9.29,0,0,0-1.6,5.8,11.32,11.32,0,0,1,2.27-.82,14.93,14.93,0,0,1,2.62-.36c1-.06,2.25-.09,3.74-.09a14.53,14.53,0,0,1,7.21,1.45,7.37,7.37,0,0,1,3.41,3.92,16,16,0,0,1,.9,5.49v6.52A12.64,12.64,0,0,1,88.59,99a8.51,8.51,0,0,1-4,3.59,14.87,14.87,0,0,1-6.09,1.15Zm2.41-10.5h1a2.81,2.81,0,0,0,1.56-.36,2,2,0,0,0,.79-1.06,5.06,5.06,0,0,0,.24-1.66V88.51a5.84,5.84,0,0,0-.27-2,1.72,1.72,0,0,0-1-1,5.05,5.05,0,0,0-2-.31H69.85a27.29,27.29,0,0,0,.24,4,6.68,6.68,0,0,0,.82,2.47,3.05,3.05,0,0,0,1.51,1.27,6.26,6.26,0,0,0,2.26.36ZM29.61,4.73C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,38.76H116.46V21.47a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,1,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.08a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.54V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07V38.76Zm110.07,6.41H6.4v68.37a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.54a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V45.17Zm-66-26.63a3.2,3.2,0,0,1,0-6.4H71.91a3.2,3.2,0,1,1,0,6.4Z" />;
const seventeen = <path d="M81.6,4.73C81.6,2.12,84.18,0,87.37,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73Zm-41,98.68V69.33H33.47V61.84l8.45-3.62H52.29v45.19Zm22,0L74.26,70.29H57.55V58.59h29l2.83,4.7L75.58,103.41ZM29.61,4.73C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,38.76H116.46V21.47a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,1,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.08a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.54V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07V38.76Zm110.07,6.41H6.4v68.37a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.54a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V45.17Zm-66-26.63a3.2,3.2,0,0,1,0-6.4H71.91a3.2,3.2,0,1,1,0,6.4Z" />;
const eighteen = <path d="M81.6,4.73C81.6,2.12,84.18,0,87.37,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM39.65,103.41V69.33H32.54V61.84L41,58.22H51.36v45.19Zm30.9.37a25.35,25.35,0,0,1-4.53-.4,11.46,11.46,0,0,1-4-1.47,7.79,7.79,0,0,1-2.84-3.11,11.63,11.63,0,0,1-1.05-5.34v-6a10.38,10.38,0,0,1,.42-2.9A6.85,6.85,0,0,1,59.93,82a4.57,4.57,0,0,1,2.65-1.51A6.67,6.67,0,0,1,60,78.32a5.91,5.91,0,0,1-.88-2.66c-.08-1-.12-2-.12-3V67.58a9,9,0,0,1,1.54-5.5,8.6,8.6,0,0,1,4-2.95,15.68,15.68,0,0,1,5.34-.91h8.57a15.6,15.6,0,0,1,5.37.91,8.57,8.57,0,0,1,4,2.95,8.93,8.93,0,0,1,1.54,5.5v5.06a16.23,16.23,0,0,1-.12,1.69,12.47,12.47,0,0,1-.48,2.27,5.7,5.7,0,0,1-1.09,2,3,3,0,0,1-1.93,1,4.65,4.65,0,0,1,3,2,8.57,8.57,0,0,1,1.21,3.11,17.43,17.43,0,0,1,.27,2.78v6c0,2.94-.55,5.14-1.63,6.61a7.85,7.85,0,0,1-4.29,3,20.62,20.62,0,0,1-5.73.76Zm2.11-9.9H75.8c1.32,0,2.13-.25,2.41-.75a4.18,4.18,0,0,0,.42-2V88.27a3,3,0,0,0-.69-2,2.53,2.53,0,0,0-2-.82H72.66a3.51,3.51,0,0,0-1.27.22,2.12,2.12,0,0,0-.87.6,2.69,2.69,0,0,0-.52.9,3.42,3.42,0,0,0-.18,1.12v2.84a2.92,2.92,0,0,0,.64,2.17,3.17,3.17,0,0,0,2.2.6Zm0-18.34H75.8a2.67,2.67,0,0,0,1.53-.33,1.52,1.52,0,0,0,.58-1.06A11.28,11.28,0,0,0,78,72.34V70.47c0-1.16-.23-1.85-.7-2a3.8,3.8,0,0,0-1.53-.3H72.66a3.36,3.36,0,0,0-1.66.33c-.38.22-.57.9-.57,2v1.87c0,1.45.17,2.35.51,2.69a2.37,2.37,0,0,0,1.72.51Zm-43-70.81C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,38.76H116.46V21.47a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,1,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.08a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.54V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07V38.76Zm110.07,6.41H6.4v68.37a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.54a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V45.17Zm-66-26.63a3.2,3.2,0,0,1,0-6.4H71.91a3.2,3.2,0,1,1,0,6.4Z" />;
const nineteen = <path d="M81.6,4.73C81.6,2.12,84.18,0,87.37,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM40.08,103.41V69.33H33V61.84l8.44-3.62H51.78v45.19Zm32.22.37a58.25,58.25,0,0,1-6.16-.31,40.44,40.44,0,0,1-5.43-.9V93.28h10.2c2.73,0,4.63-.69,5.7-2a9.22,9.22,0,0,0,1.6-5.8,13,13,0,0,1-4.89,1.18c-1,.06-2.25.09-3.74.09q-4.71,0-7.18-1.45A7.59,7.59,0,0,1,59,81.33a15.5,15.5,0,0,1-.93-5.49V69.33A12.55,12.55,0,0,1,59.48,63a8.44,8.44,0,0,1,4-3.59,15,15,0,0,1,6.09-1.15H75.8a17.74,17.74,0,0,1,6.21,1,9.47,9.47,0,0,1,4.41,3.41A17.32,17.32,0,0,1,89,69.3,54.73,54.73,0,0,1,89.91,80a48,48,0,0,1-1.17,11.55,17.94,17.94,0,0,1-3.47,7.3,12.51,12.51,0,0,1-5.55,3.8,22.69,22.69,0,0,1-7.42,1.12Zm.72-27h5.19a27.29,27.29,0,0,0-.24-4,6.33,6.33,0,0,0-.82-2.47,3.15,3.15,0,0,0-1.47-1.27,6.31,6.31,0,0,0-2.3-.36h-1a2.85,2.85,0,0,0-1.54.36,2.1,2.1,0,0,0-.82,1,5,5,0,0,0-.24,1.69v1.69a5.88,5.88,0,0,0,.27,2,1.78,1.78,0,0,0,1,1,5.34,5.34,0,0,0,2,.3ZM29.61,4.73C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,38.76H116.46V21.47a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,1,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.08a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.54V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07V38.76Zm110.07,6.41H6.4v68.37a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.54a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V45.17Zm-66-26.63a3.2,3.2,0,0,1,0-6.4H71.91a3.2,3.2,0,1,1,0,6.4Z" />;
const twenty = <path d="M81.6,4.73C81.6,2.12,84.18,0,87.37,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM26.2,103.41V94.12L40.14,79.88a27.45,27.45,0,0,0,2.23-2.47,11.79,11.79,0,0,0,1.42-2.23A5.22,5.22,0,0,0,44.3,73a4.09,4.09,0,0,0-.48-2.09,2.74,2.74,0,0,0-1.48-1.17,7.65,7.65,0,0,0-2.56-.36H26.92V60c2-.44,4.18-.85,6.61-1.23A55.44,55.44,0,0,1,42,58.22a19.84,19.84,0,0,1,8.35,1.45A8.7,8.7,0,0,1,54.71,64,16.68,16.68,0,0,1,56,70.89a17.37,17.37,0,0,1-.78,5.37A17.15,17.15,0,0,1,53,80.79,31.37,31.37,0,0,1,49.37,85l-7.72,7.91H57.21v10.49Zm48.87.37a14.65,14.65,0,0,1-6.85-1.45,9.17,9.17,0,0,1-4.07-4.19,15,15,0,0,1-1.33-6.55V71a15.6,15.6,0,0,1,1.42-7,9.72,9.72,0,0,1,4.19-4.32,14.17,14.17,0,0,1,6.7-1.48h9.78a13,13,0,0,1,6.42,1.48,9.54,9.54,0,0,1,4,4.32,16,16,0,0,1,1.36,7V91.59q0,5.67-3,8.93t-8.77,3.26ZM78,93.28h3.62A3,3,0,0,0,85,89.78V72.22a3.55,3.55,0,0,0-.85-2.8,3.09,3.09,0,0,0-2.05-.7H77.54a2.85,2.85,0,0,0-2.29.85,4,4,0,0,0-.72,2.65v17.5a3.7,3.7,0,0,0,.84,2.74,3.61,3.61,0,0,0,2.6.82ZM29.61,4.73C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,38.76H116.46V21.47a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,1,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.08a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.54V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07V38.76Zm110.07,6.41H6.4v68.37a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.54a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V45.17Zm-66-26.63a3.2,3.2,0,0,1,0-6.4H71.91a3.2,3.2,0,1,1,0,6.4Z" />;

const periods = [{ num: 2, icon: newClaims },
{ num: 13, icon: thirteen }, { num: 14, icon: fourteen }, { num: 15, icon: fifteen },
{ num: 16, icon: sixteen }, { num: 17, icon: seventeen }, { num: 18, icon: eighteen },
{ num: 19, icon: nineteen }, { num: 20, icon: twenty }
];

export { periods }
