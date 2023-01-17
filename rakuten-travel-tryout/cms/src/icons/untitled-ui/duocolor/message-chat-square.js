const MessageChatSquare = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="currentColor"
      d="M22 14.2c0-1.1201 0-1.6802-.218-2.108a1.9996 1.9996 0 0 0-.874-.874C20.4802 11 19.9201 11 18.8 11h-5.6c-1.1201 0-1.6802 0-2.108.218a1.9996 1.9996 0 0 0-.874.874C10 12.5198 10 13.0799 10 14.2v2.5143c0 1.1201 0 1.6801.218 2.108.1917.3763.4977.6823.874.874.4278.218.9879.218 2.108.218h1.7969c.3726 0 .5589 0 .7387.0331.1595.0294.3148.0781.4626.145.1665.0754.3195.1818.6254.3945L19 22v-2.0857c.9319 0 1.3978 0 1.7654-.1523a2 2 0 0 0 1.0824-1.0823C22 18.3121 22 17.8462 22 16.9143V14.2Z"
      opacity={0.12}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10 15-3.0753 3.1137c-.429.4343-.6434.6515-.8277.6668a.4998.4998 0 0 1-.421-.1729c-.1204-.1404-.1204-.4456-.1204-1.0561v-1.5599c0-.5476-.4485-.9439-.9904-1.0233v0a3 3 0 0 1-2.5335-2.5335C2 12.2186 2 11.9605 2 11.4444V6.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C4.2798 2 5.1198 2 6.8 2h7.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C19 4.2798 19 5.1198 19 6.8V11m0 11-2.1764-1.5131c-.3059-.2127-.4589-.3191-.6254-.3945a2.0017 2.0017 0 0 0-.4626-.145c-.1798-.0331-.3661-.0331-.7387-.0331H13.2c-1.1201 0-1.6802 0-2.108-.218a1.9996 1.9996 0 0 1-.874-.874C10 18.3944 10 17.8344 10 16.7143V14.2c0-1.1201 0-1.6802.218-2.108a1.9996 1.9996 0 0 1 .874-.874C11.5198 11 12.0799 11 13.2 11h5.6c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874.218.4278.218.9879.218 2.108v2.7143c0 .9319 0 1.3978-.1522 1.7654a2 2 0 0 1-1.0824 1.0823c-.3676.1523-.8335.1523-1.7654.1523V22Z"
    />
  </svg>
);

export default MessageChatSquare;
